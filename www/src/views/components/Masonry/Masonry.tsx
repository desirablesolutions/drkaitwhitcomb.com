import Item from "./Item";

export default function Masonry(props: any) {
  let { grids } = props;

  const ratio = [];

  const ContainerSx = (props: {
    gap: number;
    cols: number;
    isGroup: boolean;
  }) => {
    let { gap, cols, isGroup } = props;
    return `gap-${gap} grid grid-cols-${cols} ${isGroup ? "group" : ""}`;
  };

  const images = {
    flowers: "https://static.wixstatic.com/media/148286_d98ff02dbdfa4e14ac4214f5fd27d6d4~mv2.jpg/v1/crop/x_0,y_73,w_3456,h_3303/fill/w_404,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Flowers_JPG.jpg",
    office: "https://static.wixstatic.com/media/148286_8336bd7412da42ebb81f5976c90293ac~mv2.jpg/v1/crop/x_102,y_194,w_2960,h_2873/fill/w_394,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chairs_JPG.jpg",
    profile:
      "https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg",
    landscape:
      "https://static.wixstatic.com/media/148286_0e5e6307be454421b61d5d9c485ab0dd~mv2.jpg/v1/crop/x_437,y_0,w_4733,h_4000/fill/w_806,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oc-gonzalez-UIAyfvo9Bbw-unsplash.jpg",
  };

  return (
    <div className={ContainerSx({ gap: 2, cols: 1, isGroup: true })}>
      <div
        key={Date.now()}
        className={ContainerSx({ gap: 2, cols: 2, isGroup: false })}
      >
        <Item>
          <img
            className="h-auto min-w-full rounded-lg"
            src={images.profile}
            alt=""
          />
        </Item>
        <Item>
          <img
            className="h-auto min-w-full rounded-lg"
            src={images.landscape}
            alt=""
          />
        </Item>
        <Item>
          <img
            className="h-auto min-w-full rounded-lg"
            src={images.office}
            alt=""
          />
        </Item>

        <Item>
          <img
            className="h-auto min-w-full rounded-lg"
            src={images.flowers}
            alt=""
          />
        </Item>


        <Item>
          Individual therapy from a licensed psychologist I work with adult
          clients to help them find the healing they’re looking for. I’m glad
          you’re here! Learn more
        </Item>

        <Item>

        Dr. Kait Whitcomb, LLC
therapy@drkaitwhitcomb.com

Phone: (407) 493-2238      Fax: (407) 542-1804
        </Item>

      </div>
    </div>
  );
}
