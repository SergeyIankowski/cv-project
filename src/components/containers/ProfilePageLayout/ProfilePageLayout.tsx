import {FC, ReactNode} from "react";
import {PageLayout} from "@view/PageLayout/PageLayout";
import {ProfileTabs} from "@containers/ProfileTabs/ProfileTabs";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const ProfilePageLayout: FC<ProfileLayoutProps> = ({children}) => {
  return (
    <PageLayout>
      <ProfileTabs />
      {children}
    </PageLayout>
  );
};
