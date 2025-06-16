
interface AmenityItemProps {
    title: string;
    distance: string;
}

export default function AmenityItem({ title, distance }: AmenityItemProps) {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium">{title}</div>
            <div className="text-gray-600 text-sm">{distance}</div>
        </div>
    );
}
