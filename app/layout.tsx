import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "./pages/context/Context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHAABAN",
  description:
    "Explore the latest trends in streetwear and modern fashion. Shop high-quality, affordable clothing for men and women at UrbanThread. New arrivals weekly!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

// export default async function LocaleLayout({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: Promise<{locale: string}>;
// }) {
//   // Ensure that the incoming `locale` is valid
//   const {locale} = await params;
//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }

//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider>{children}</NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
