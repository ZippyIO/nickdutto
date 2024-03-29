import HeaderSection from '~/app/header';
import ProjectSection from '~/app/projects';
import SkillsSection from '~/app/skills';
import Divider from '~/components/ui/Divider';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <HeaderSection className="flex w-full max-w-7xl flex-col gap-2 px-0 py-4 sm:px-6" />
      <Divider wrapperProps={{ className: 'w-full max-w-7xl px-0 sm:px-6' }} />
      <SkillsSection className="flex w-full max-w-7xl flex-col gap-2 px-0 py-4 sm:px-6" />
      <Divider wrapperProps={{ className: 'w-full max-w-7xl px-0 sm:px-6' }} />
      <ProjectSection className="flex w-full max-w-7xl flex-col gap-2 px-0 py-4 sm:px-6" />
    </main>
  );
};

export default Page;
