// import { auth } from "auth";
// import ClientExample from "@/components/client-example";
import { ThemeProvider } from "next-themes";
import { SessionProvider, useSession } from "next-auth/react";
import { RecoilRoot } from "recoil";
import HeaderLink from "@/components/HeaderLink";

export default async function ClientPage() {
  const {data: session} = await useSession();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <HeaderLink Icon={undefined} text={""} avatar={false} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
