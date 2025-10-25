import { cn } from "@/lib/utils";

export default function AppButton({children, className}: {children: React.ReactNode, className?:string}) {
    return (
        <button className={cn('rounded-md border-2 border-transparent bg-primary px-6 py-2 font-bold text-white transition duration-200 hover:border-primary hover:bg-white hover:text-black', className)}>
            {children}
        </button>
    );
}
