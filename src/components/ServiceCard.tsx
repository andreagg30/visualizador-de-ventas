import { Card } from '.';

interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, desc, icon }: Props) {
  return (
    <Card className="select-none items-center pt-2 transition-all hover:scale-[1.02]">
      <div className="flex h-20 items-center justify-center">{icon}</div>
      <div className="flex justify-center">
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <p className="mt-4 px-12 pb-5 text-justify">{desc}</p>
    </Card>
  );
}
