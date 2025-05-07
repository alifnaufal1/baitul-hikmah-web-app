export const ProfileIcon = ({
  imageProfileURL,
  profileName,
}: {
  imageProfileURL?: string;
  profileName: string;
}) => {
  return (
    <div className="w-10 flex items-center gap-1.5">
      <img src={imageProfileURL} alt="" className="h-10 rounded-full " />
      <span className="profile-name">{profileName}</span>
    </div>
  );
};
