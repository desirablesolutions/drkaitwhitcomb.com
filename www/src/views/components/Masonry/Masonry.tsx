export const variants = {
  content: [],
  hero: [],
};

export default function Masonry(props: any) {
  let { grids } = props;

  const ratio = [];

  const ContainerSx = (gap: number) => `gap-${gap} grid grid-cols-1  group`;

  return (
    <div className={ContainerSx(2)}>
      <div key={Date.now()} className="grid grid-cols-2 gap-4">
            <div className="w-full shadow-sm cursor-pointer hover:shadow-md">
              <img
                className="h-auto min-w-full rounded-lg"
                src="https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg"
                alt=""
              />
            </div>
            <div className="w-full shadow-sm cursor-pointer hover:shadow-md">
              <img
                className="h-auto min-w-full rounded-lg"
                src="https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg"
                alt=""
              />
            </div>
            <div className="w-full shadow-sm cursor-pointer hover:shadow-md">
              <img
                className="h-auto min-w-full rounded-lg"
                src="https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg"
                alt=""
              />
            </div>
          </div>
    </div>
  );
}
