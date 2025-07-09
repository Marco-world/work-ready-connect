
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface ProfileImageUploadProps {
  candidate: CaregiverWithCareTypes;
  onImageUpdate?: (newImageUrl: string) => void;
}

const ProfileImageUpload = ({ candidate, onImageUpdate }: ProfileImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${candidate.id}.${fileExt}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data } = supabase.storage
        .from('profile-images')
        .getPublicUrl(fileName);

      // Update caregiver record with new avatar URL
      const { error: updateError } = await supabase
        .from('caregivers')
        .update({ avatar_url: data.publicUrl })
        .eq('id', candidate.id);

      if (updateError) {
        throw updateError;
      }

      toast.success('Profile image updated successfully!');
      
      if (onImageUpdate) {
        onImageUpdate(data.publicUrl);
      }

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Profile Image</h2>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src={candidate.avatar_url || ''} alt={candidate.name} />
          <AvatarFallback className="bg-emerald-100 text-emerald-600 font-bold text-2xl">
            {candidate.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col items-center space-y-2">
          <Button
            variant="outline"
            className="relative overflow-hidden"
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload New Image
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={uploadImage}
              disabled={uploading}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Supports JPG, PNG, GIF up to 10MB
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileImageUpload;
