import Container from "@/components/Container";
import LayoutFooter from "@/components/footer/LayoutFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <LayoutFooter />
    </div>
  );
}
