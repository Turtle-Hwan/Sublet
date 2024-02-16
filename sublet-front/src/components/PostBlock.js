import { PostSummaryBlock } from "./SummaryBlock";
import { DateFormat, priceToString } from "./StaticComponents.js";
import * as s from './styles/SummaryBlock.styles.js'
import './styles/Popup.styles.css'
import { FetchPost } from "./FetchList";
import * as w from "./styles/Wrapper.style.js";


function PostInfo() {
  const post = FetchPost()

  return (
    <div className="mb-4 mt-8">
      <w.SecondHead className="inline">방 현황</w.SecondHead>
      <s.black_upload_button >방 올리기</s.black_upload_button>
      <w.Horizon />
      {post.length > 0 ? post.map((res) => {
        const address = res.city + ' ' + res.gu + ' ' + res.dong;
        const post_date = DateFormat(res.post_date);
        const price = priceToString(res.price);

        return (
          < PostSummaryBlock
            requestForm={res.RequestForm}
            id_list={res.requestIDs}
            title={res.title}
            post_key={res.key}
            accomodation_type={res.accomodation_type}
            post_date={post_date}
            pay={price}
            request={res.request}
            private_post={res.private}
            contract={res.contract}
            address={address}
            room_image={res.image_id[0]}
          />)
      }) : <p className="text-base font-extrabold">올린 방이 아직 없습니다.</p>
      }
    </div>
  )
};

export { PostInfo };