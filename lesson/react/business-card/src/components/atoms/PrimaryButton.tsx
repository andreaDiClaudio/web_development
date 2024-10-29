interface PrimaryButtonProps {
    buttonText: string;
    onClick: () => void;
}

export default function PrimaryButton({ buttonText, onClick }: PrimaryButtonProps) {
    return <button onClick={onClick}>{buttonText}</button>
}
