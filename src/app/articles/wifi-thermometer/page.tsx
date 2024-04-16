import MultiArticle from '../../components/MultiArticle';

export default async function WifiThermometer() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/wifi-thermometer`}
      images={[
        
      ]}
    />
  );
}