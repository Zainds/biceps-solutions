import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { User, Phone, Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { toast } from 'sonner';

interface ProfileFormInputs {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const ProfilePage = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [memberships, setMemberships] = useState<any[]>([]);
  
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors } 
  } = useForm<ProfileFormInputs>({
    defaultValues: {
      email: user?.email || '',
      fullName: profile?.full_name || '',
      phoneNumber: profile?.phone_number || ''
    }
  });
  
  useEffect(() => {
    if (user && profile) {
      setValue('email', user.email || '');
      setValue('fullName', profile.full_name || '');
      setValue('phoneNumber', profile.phone_number || '');
    }
    
    async function fetchMemberships() {
      const { data, error } = await supabase
        .from('memberships')
        .select('*');
        
      if (error) {
        console.error('Error fetching memberships:', error);
        return;
      }
      
      setMemberships(data || []);
    }
    
    fetchMemberships();
  }, [user, profile, setValue]);
  
  const onSubmit = async (data: ProfileFormInputs) => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: data.fullName,
          phone_number: data.phoneNumber,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);
        
      if (error) throw error;
      
      await refreshProfile();
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Profile Settings</h1>
      
      <div className="bg-background rounded-lg shadow-sm overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <User size={40} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile?.full_name || 'User'}</h2>
              <p>{user?.email}</p>
              <div className="mt-1 text-sm">
                {profile?.memberships ? (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full">
                    {profile.memberships.name} Membership
                  </span>
                ) : (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full">
                    No Active Membership
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Form */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email"
              type="email"
              leftIcon={<Mail size={18} />}
              readOnly
              {...register('email')}
            />
            
            <Input
              label="Full Name"
              type="text"
              leftIcon={<User size={18} />}
              error={errors.fullName?.message}
              {...register('fullName', { 
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
            />
            
            <Input
              label="Phone Number"
              type="tel"
              leftIcon={<Phone size={18} />}
              error={errors.phoneNumber?.message}
              {...register('phoneNumber')}
            />
            
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
            >
              Save Changes
            </Button>
          </form>
        </div>
      </div>
      
      {/* Membership Section */}
      <div className="mt-8 bg-background rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Membership Information</h3>
        
        {profile?.memberships ? (
          <div>
            <div className="p-4 border rounded-lg mb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {profile.memberships.name}
                  </div>
                  <p className="text-muted-foreground">{profile.memberships.description}</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Update Plan
                  </Button>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium text-muted-foreground mb-2">Other Available Plans:</h4>
            <div className="space-y-4">
              {memberships
                .filter(m => m.id !== profile.memberships.id)
                .map(membership => (
                  <div key={membership.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h5 className="font-medium">{membership.name}</h5>
                        <p className="text-sm text-muted-foreground">{membership.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 md:mt-0"
                      >
                        Switch Plan
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-muted-foreground mb-4">You don't have an active membership plan.</p>
            
            <h4 className="font-medium mb-2">Available Plans:</h4>
            <div className="space-y-4">
              {memberships.map(membership => (
                <div key={membership.id} className="p-4 border rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h5 className="font-medium">{membership.name}</h5>
                      <p className="text-sm text-muted-foreground">{membership.description}</p>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-3 md:mt-0"
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;