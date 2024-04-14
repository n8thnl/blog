import ProjectCard from '../components/ProjectCard';
import PageWithNavBar from "../components/PageWithNavBar";
import { promises as fs } from 'fs';

export default async function Random() {

  // inventory introduction text
  const inventoryIntroductionMd = await fs.readFile(process.cwd() + '/src/app/markdown/pcb-clamp/v0.1-v0.2.md', 'utf-8');

  return (
    <PageWithNavBar>
      <ProjectCard path="/articles/pcb-clamp" imageFilename="/pcb-clamp/v0.2-stl-2.png" imageHeight={160} imageWidth={240} markdownBody={inventoryIntroductionMd} />
    </PageWithNavBar>
  );
}
