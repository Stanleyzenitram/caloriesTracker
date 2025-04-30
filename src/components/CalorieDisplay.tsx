type CalorieDisplayProps = {
    calories: number;
    texto: string;
};

export default function CalorieDisplay({calories, texto}: CalorieDisplayProps) {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-bold text-6xl text-orange-500 ">
                {calories}
            </span>
            {texto}
        </p>
    );
}
