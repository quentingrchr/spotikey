import SignIn from "@/components/SignIn";
import { auth } from "./auth";
import Header from "@/components/header/Header";
import MusicCollection from "@/components/music-collection/MusicCollection";
import PageContainer from "@/components/PageContainer";

export default async function Home() {
  const session = await auth();
  if (!session) return <SignIn />;
  const { user, accessToken } = session;
  return (
    <PageContainer user={user}>
      <MusicCollection />
      {/* {accessToken && <FetchTest accessToken={accessToken} />} */}
      <SignIn />
    </PageContainer>
  );
}
