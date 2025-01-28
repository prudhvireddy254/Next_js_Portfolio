import Image from "next/image";

// Interface for AvatarProps
interface AvatarProps {
  person: {
    name: string; // Ensure 'person' has a 'name' property
    imageId: string; // Add an 'imageId' property for the image source
  };
  size: number; // Avatar size
}

// Avatar Component
function Avatar({ person, size }: AvatarProps) {
  return (
    <Image
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Utility function to get image URL
export function getImageUrl(person: { imageId: string }, size = 100) {
  return `https://i.imgur.com/${person.imageId}${size === 100 ? "l" : "s"}.jpg`;
}

// Profile Component
export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}
