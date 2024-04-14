import MultiArticle from '../../components/MultiArticle';

export default async function Inventory() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/aws-console-hotkeys`}
      images={[
        '/aws-console-hotkeys/doio-mapping.png'
      ]}
    />
  );
}
