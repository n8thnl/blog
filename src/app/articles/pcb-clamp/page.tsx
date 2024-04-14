import MultiArticle from '../../components/MultiArticle';

export default async function PcbClamp() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/pcb-clamp`}
      images={[
        '/pcb-clamp/v0.1-stl-1.png',
        '/pcb-clamp/v0.1-stl-2.png',
        '/pcb-clamp/v0.2-stl-1.png',
        '/pcb-clamp/v0.2-stl-2.png',
        '/pcb-clamp/pcb-support-v0.2-1.jpg',
        '/pcb-clamp/pcb-support-v0.2-2.jpg',
        '/pcb-clamp/pcb-support-v0.2-3.jpg',
        '/pcb-clamp/pcb-support-v0.2-4.jpg',
      ]}
    />
  );
}