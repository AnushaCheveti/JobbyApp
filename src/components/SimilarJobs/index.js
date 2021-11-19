import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn, MdBusinessCenter} from 'react-icons/md'

import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    title,
    jobDescription,
    employmentType,
    location,
    rating,
  } = similarJobData

  return (
    <li className="similar-jobs-li-container">
      <div className="img-job-title-container">
        <img
          className="company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="title-rating-container">
          <h1 className="job-title">{title}</h1>
          <div className="star-rating-container">
            <AiFillStar className="star-icon" />
            <p className="rating-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-job-container">
        <h1 className="job-description">Description</h1>
        <p className="job-description-para">{jobDescription}</p>
      </div>
      <div className="job-location-container">
        <div className="location-icon-container">
          <MdLocationOn className="location-icon" />
          <p className="location-text">{location}</p>
        </div>
        <div className="employment-type-container">
          <MdBusinessCenter className="employment-icon" />
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}
export default SimilarJobs
