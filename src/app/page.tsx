import SalesForm from "@/components/sales.form";
import SupportForm from "@/components/support.form";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-6 pb-5 pt-10">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <Card className="w-full max-w-[500px]">
        <Tabs defaultValue="sales">
          <CardContent className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sales">talk to sales</TabsTrigger>
              <TabsTrigger value="support">support</TabsTrigger>
            </TabsList>

            <TabsContent value="sales">
              <p className="mb-4 text-sm text-muted-foreground">
                You wont to integrate your product with us? We would love to
                hear from you.
              </p>
              <SalesForm />
            </TabsContent>
            <TabsContent value="support">
              <SupportForm />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </main>
  );
}
