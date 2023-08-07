'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
  }

  const EmptyState: React.FC<EmptyStateProps> = ({
    title = "No se encontraron resultados",
    subtitle = "Intenta cambiar o remover algunos filtros.",
    showReset
  }) => {
    const router = useRouter();

    return (
        <div className="
            h-[60vh]
            flex 
            flex-col 
            gap-2 
            justify-center 
            items-center 
        ">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                <Button
                    outline
                    label="Remover filtros"
                    onClick={() => router.push('/?page=1&per_page=3&sort=createdAt.desc')}
                />
            )}
            </div>
        </div>
    );
}
 
export default EmptyState;