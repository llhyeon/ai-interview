import { Card } from "@/components/ui/card";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <Card className="w-full max-w-md p-4">{children}</Card>
    </section>
  );
}

export default LoginLayout;
