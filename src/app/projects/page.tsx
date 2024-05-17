import ProjectCard from '../components/ProjectCard';
import PageWithNavBar from "../components/PageWithNavBar";
import { promises as fs } from 'fs';

export default async function Projects() {

  // git article
  const gitArticleMd = await fs.readFile(process.cwd() + '/src/app/markdown/git-merge-or-rebase.md', 'utf-8');
  const gitArticleStripped = gitArticleMd.slice(gitArticleMd.indexOf('######'), 300);

  // introduction article
  const introductionArticleMd = await fs.readFile(process.cwd() + '/src/app/markdown/introduction.md', 'utf-8');
  const introductionArticleStripped = introductionArticleMd.slice(introductionArticleMd.indexOf('######'), 300);

  // inventory introduction text
  const inventoryIntroductionMd = await fs.readFile(process.cwd() + '/src/app/markdown/inventory/introduction.md', 'utf-8');

  // aws-console-hotkeys article
  const awsConsoleHotkeysMd = await fs.readFile(process.cwd() + '/src/app/markdown/aws-console-hotkeys/introduction.md', 'utf-8');

  // wifi-thermometer article
  const wifiThermometerMd = await fs.readFile(process.cwd() + '/src/app/markdown/wifi-thermometer/introduction.md', 'utf-8');

  // smart-knob article
  const smartKnobMd = await fs.readFile(process.cwd() + '/src/app/markdown/smart-knob/introduction.md', 'utf-8');

  return (
    <PageWithNavBar>
      <ProjectCard path="/articles/smart-knob" imageFilename="/smart-knob/knob_6.jpg" imageHeight={180} imageWidth={270} markdownBody={smartKnobMd} />
      <ProjectCard path="/articles/wifi-thermometer" imageFilename="/wifi-thermometer/thermistor-thumbnail.png" imageHeight={180} imageWidth={300} markdownBody={wifiThermometerMd} />
      <ProjectCard path="/articles/aws-console-hotkeys" imageFilename="/aws-console-hotkeys/macropad-thumbnail-2.gif" imageHeight={160} imageWidth={280} markdownBody={awsConsoleHotkeysMd} />
      <ProjectCard path="/articles/inventory" imageFilename="https://i.postimg.cc/WbgbNwFN/inventory-thumbnail.png" imageHeight={180} imageWidth={180} markdownBody={inventoryIntroductionMd} />
      <ProjectCard path="/articles/git-merge-or-rebase" imageFilename="/git-merge-or-rebase/bad-merge.gif" imageHeight={130} imageWidth={250} markdownBody={gitArticleStripped} />
      <ProjectCard path="/articles/introduction" imageFilename="/introduction/whoami.gif" imageHeight={170} imageWidth={250} markdownBody={introductionArticleStripped} />
    </PageWithNavBar>
  );
}
