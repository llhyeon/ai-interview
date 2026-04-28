import { Card } from "@/components/ui/card";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Card className="min-w-sm p-4">{children}</Card>
    </section>
  );
}

export default LoginLayout;
