import Masonry from "@components/Masonry";

import { usePage } from "@/controllers/hooks/usePage";

export const images = {
  overlooking:
    "https://static.wixstatic.com/media/148286_e7602f25ebe7452b90aaca2b0248d6c2~mv2.jpg/v1/fill/w_819,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bookshelf_JPG.jpg",
  flowers:
    "https://static.wixstatic.com/media/148286_d98ff02dbdfa4e14ac4214f5fd27d6d4~mv2.jpg/v1/crop/x_0,y_73,w_3456,h_3303/fill/w_404,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Flowers_JPG.jpg",
  office:
    "https://static.wixstatic.com/media/148286_8336bd7412da42ebb81f5976c90293ac~mv2.jpg/v1/crop/x_102,y_194,w_2960,h_2873/fill/w_394,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chairs_JPG.jpg",
  profile:
    "https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg",
  landscape:
    "https://static.wixstatic.com/media/148286_0e5e6307be454421b61d5d9c485ab0dd~mv2.jpg/v1/crop/x_437,y_0,w_4733,h_4000/fill/w_806,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oc-gonzalez-UIAyfvo9Bbw-unsplash.jpg",
};
export default async function Home() {

  const { pageData, metaData, version } = await usePage("home");

  const test = {
    container: {
      gap: 2,
      cols: 4
    },
    items: [
      {
        type: "text",
        content: "Testing Masonry!!"
      },
    ],
    grids: [
      {
        items: [
          {
            type: "image",
            src: images.profile,
          },
          {
            type: "image",
            src: images.flowers,
          },
          {
            type: "image",
            src: images.overlooking,
          },
        ],
      },
      {
        items: [
          {
            type: "text",
            content: `Individual therapy from a licensed psychologist I work with adult
              clients to help them find the healing they’re looking for. I’m glad you’re here! Learn more`,
          },

          {
            type: "text",
            content: ` Dr. Kait Whitcomb, LLC <br />
                    therapy@drkaitwhitcomb.com
                    <br />
                    Phone: (407) 493-2238 <br />
                    Fax: (407) 542-1804`,
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Masonry {...test} />
    </main>
  );
}
