import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">
                        저와 함께 일하고 싶다면 여기로!
                    </h2>
                    <Link href="/contact">
                        <Button>Contact me</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
