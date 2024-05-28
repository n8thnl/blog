import MultiArticle from '../../components/MultiArticle';

export default async function Automated3dPrintingTuning() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/automated-3d-printing-tuning`}
      images={[
        '/automated-3d-printing-tuning/0.18-flat.jpeg',
        '/automated-3d-printing-tuning/4-squares-different-configs.jpeg',
        '/automated-3d-printing-tuning/extrusion-width-combined.png',
        '/automated-3d-printing-tuning/flow-percentage-combined.png',
        '/automated-3d-printing-tuning/over-extrusion.png',
        '/automated-3d-printing-tuning/speed-combined.png',
        '/automated-3d-printing-tuning/temperature-combined.png',
        '/automated-3d-printing-tuning/under-extrusion.png'
      ]}
    />
  );
}
