interface BenefitItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function BenefitItem({ icon, title, description }: BenefitItemProps) {
    return (
        <div className="flex items-start">
            <div className="text-gray-400 mr-4 mt-1">{icon}</div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}