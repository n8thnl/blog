import MultiArticle from '../../components/MultiArticle';

export default async function Inventory() {

  return (
    <MultiArticle 
      folderPath={`${process.cwd()}/src/app/markdown/inventory`}
      images={[
        '/inventory/messy-desk-1.jpg',
        '/inventory/messy-desk-2.jpg',
        '/inventory/messy-desk-3.jpg',
        '/inventory/messy-desk-4.jpg',
        '/inventory/cad-separator-1.png',
        '/inventory/cad-separator-2.png',
        '/inventory/single-divider.jpg',
        '/inventory/storage-bins.jpg'
      ]}
    />
  );
}
