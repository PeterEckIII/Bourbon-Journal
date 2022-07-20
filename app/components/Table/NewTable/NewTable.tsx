import { Link } from "remix";
import ExternalLink from "~/components/Icons/ExternalLink";
import { getReviewsForTable } from "~/models/review.server";
import type { IReviewTableItem } from "~/routes/reviews/index";
import LinkCell from "../LinkCell/LinkCell";
import NameCell from "../NameCel/NameCell";
import RatingPill from "../RatingPill/RatingPill";

interface ITableProps {
  data: any[];
  columns: any;
}

export default function NewTable({ data }: ITableProps) {
  return (
    <div className="m-[30px]">
      <table>
        <caption>Peter's Reviews</caption>
        <thead>
          <tr>
            <th className="name-col name-header">Name</th>
            <th className="date-col date-header">Date</th>
            <th className="type-col type-header">Type</th>
            <th className="distiller-col distiller-header">Distiller</th>
            <th className="producer-col producer-header">Producer</th>
            <th className="rating-col rating-header">Rating</th>
            <th className="link-col link-header">Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((review: IReviewTableItem) => (
            <tr key={review.reviewId}>
              <td className="name-col name">
                <div className="image-container">
                  <img
                    className="bottle-image"
                    src={`https://res.cloudinary.com/jpeckiii/image/upload/cl2c0togd0005ebsf0fbpdakc/f9fc1081-1375-4441-a2a2-8147cddb4215`}
                    alt={`Bottle of ${review.name}`}
                    height={50}
                    width={50}
                  />
                </div>
                <div>{review.name}</div>
              </td>
              <td className="date-col date">{review.date}</td>
              <td className="type-col type">{review.type}</td>
              <td className="distiller-col distiller">{review.distillery}</td>
              <td className="producer-col producer">{review.producer}</td>
              <td className="rating-col rating">{review.rating}</td>
              <td className="link-col link">
                <Link
                  className="hidden text-blue-600 sm:inline"
                  to={`/reviews/${review.reviewId}`}
                >
                  Review
                </Link>
                <Link
                  to={`/reviews/${review.reviewId}`}
                  className="inline text-center sm:hidden"
                >
                  <ExternalLink className="" />
                </Link>
              </td>
            </tr>
          ))}
          <tr>
            <td className="name-col name">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Buffalo Trace</div>
            </td>
            <td className="date-col date">06/12/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">Buffalo Trace</td>
            <td className="producer-col producer">Sazerac</td>
            <td className="rating-col rating">3</td>
            <td className="link-col link">
              <a href="https://google.com">Review</a>
            </td>
          </tr>
          <tr>
            <td className="name-col name">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Stagg Jr</div>
            </td>
            <td className="date-col date">06/15/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">Buffalo Trace</td>
            <td className="producer-col producer">Sazerac</td>
            <td className="rating-col rating">5</td>
            <td className="link-col link">
              <a href="https://google.com">Review</a>
            </td>
          </tr>
          <tr>
            <td className="name-col name">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Smoke Wagon Uncut Unfiltered</div>
            </td>
            <td className="date-col date">02/15/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">MGP</td>
            <td className="producer-col producer">Smoke Wagon</td>
            <td className="rating-col rating">4</td>
            <td className="link-col link">
              <a href="https://google.com">Review</a>
            </td>
          </tr>
          <tr>
            <td className="name-col name">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Lost Monarch</div>
            </td>
            <td className="date-col date">05/30/2022</td>
            <td className="type-col type">Bourye</td>
            <td className="distiller-col distiller">Redwood Empire</td>
            <td className="producer-col producer">Redwood Empire</td>
            <td className="rating-col rating">3</td>
            <td className="link-col link">
              <a href="https://google.com">Review</a>
            </td>
          </tr>
          <tr>
            <td className="name-col name">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Very Old Barton</div>
            </td>
            <td className="date-col date">05/28/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">Barton</td>
            <td className="producer-col producer">1792 Barton</td>
            <td className="rating-col rating">2</td>
            <td className="link-col link">
              <a href="https://google.com">Review</a>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <table className="w-full table-fixed border-collapse rounded-lg border border-solid border-blue-900">
        <caption
          className="p-6 text-right italic tracking-[1px] text-gray-300"
          style={{ captionSide: "bottom" }}
        >
          Peter's Reviews
        </caption>
        <thead>
          <tr>
            <th className="name-col name-header w-[20%] pl-4 text-left tracking-wide">
              Name
            </th>
            <th className="date-col date-header w-[10%] p-[3px] text-center tracking-wide">
              Date
            </th>
            <th className="type-col type-header w-[10%] p-[3px] text-center tracking-wide">
              Type
            </th>
            <th className="distiller-col distiller-header w-[15%] p-[3px] text-center tracking-wide">
              Distiller
            </th>
            <th className="producer-col producer-header w-[15%] p-[3px] text-center tracking-wide">
              Producer
            </th>
            <th className="rating-col rating-header w-[8%] p-[3px] text-center tracking-wide">
              Rating
            </th>
            <th className="link-col link-header w-[10%] p-[3px] text-center tracking-wide">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((review) => (
            <tr key={review.id} className="odd:bg-gray-100 even:bg-gray-400">
              <td className="name-col m-2 p-2">
                <div className="flex items-center p-2">
                  <div className="mr-2">
                    <img
                      src={`https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80`}
                      alt={`Bottle of ${review.name}`}
                      height="50px"
                      width="50px"
                    />
                  </div>
                  <div className="ml-2">{review.name}</div>
                </div>
              </td>
              <td className="m-2 p-2 text-center">{review.date}</td>
              <td className="m-2 p-2 text-center">{review.type}</td>
              <td className="m-2 p-2 text-center">{review.distillery}</td>
              <td className="m-2 p-2 text-center">{review.producer}</td>
              <td className="m-2 p-2 text-center">{review.rating}</td>
              <td className="m-2 p-2 text-center">
                <Link className="" to={`reviews/${review.id}`}>Review</Link>
              </td>
            </tr>
          ))}
          <tr className="">
            <td className="name-col name m-[5px] p-[5px]">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Buffalo Trace</div>
            </td>
            <td className="date-col date hidden sm:table-cell m-[5px] p-[5px]">06/12/2022</td>
            <td className="type-col type m-[5px] p-[5px]">Bourbon</td>
            <td className="distiller-col distiller m-[5px] p-[5px]">
              Buffalo Trace
            </td>
            <td className="producer-col producer m-[5px] p-[5px]">Sazerac</td>
            <td className="rating-col rating m-[5px] p-[5px]">3</td>
            <td className="link-col link m-[5px] p-[5px]">
              <Link className="" to="https://google.com">Review</Link>
            </td>
          </tr>

          <tr className="">
            <td className="name-col name flex items-center">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Stagg Jr</div>
            </td>
            <td className="date-col date">06/15/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">Buffalo Trace</td>
            <td className="producer-col producer">Sazerac</td>
            <td className="rating-col rating text-xs sm:text-base">5</td>
            <td className="link-col link text-xs sm:text-base">
              <Link className="" to="https://google.com">Review</Link>
            </td>
          </tr>
          <tr className="">
            <td className="name-col name flex items-center">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Smoke Wagon Uncut Unfiltered</div>
            </td>
            <td className="date-col date">02/15/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">MGP</td>
            <td className="producer-col producer">Smoke Wagon</td>
            <td className="rating-col rating text-xs sm:text-base">4</td>
            <td className="link-col link text-xs sm:text-base">
              <Link className="" to="https://google.com">Review</Link>
            </td>
          </tr>
          <tr className="">
            <td className="name-col name flex items-center">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Lost Monarch</div>
            </td>
            <td className="date-col date">05/30/2022</td>
            <td className="type-col type">Bourye</td>
            <td className="distiller-col distiller">Redwood Empire</td>
            <td className="producer-col producer">Redwood Empire</td>
            <td className="rating-col rating text-xs sm:text-base">3</td>
            <td className="link-col link text-xs sm:text-base">
              <Link className="" to="https://google.com">Review</Link>
            </td>
          </tr>
          <tr className="">
            <td className="name-col name flex items-center">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                  alt="Cool vibes"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>Very Old Barton</div>
            </td>
            <td className="date-col date">05/28/2022</td>
            <td className="type-col type">Bourbon</td>
            <td className="distiller-col distiller">Barton</td>
            <td className="producer-col producer">1792 Barton</td>
            <td className="rating-col rating text-xs sm:text-base">2</td>
            <td className="link-col link text-xs sm:text-base">
              <Link className="" to="https://google.com">Review</Link>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
