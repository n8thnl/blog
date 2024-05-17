import MultiArticle from '../../components/MultiArticle';

export default async function WifiThermometer() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/smart-knob`}
      images={[
        '/smart-knob/knob_1.jpg',
        '/smart-knob/knob_2.jpg',
        '/smart-knob/knob_3.jpg',
        '/smart-knob/knob_4.jpg',
        '/smart-knob/knob_5.jpg',
        '/smart-knob/knob_6.jpg'
      ]}
    />
  );
}