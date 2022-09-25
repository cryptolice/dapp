import React from 'react';
import Typo from "../../components/Typo";
import Rating from "@mui/material/Rating";
import {RatingLevel, ratingLevelByStars, ratingStars} from "../../utils/rating";
import {Extendable} from "../../types";
import classnames from "classnames";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {RiskDetail} from "../../hooks/useSecurityAddress";
import {isNonEmptyArray} from "../../utils/values";
import Stack from '@mui/material/Stack';
import Chip from "@mui/material/Chip";
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import Button from "../../components/Button";
import {useRouter} from "next/router";

export type ResultProps = Extendable & {
  address: string;
  score: number;
  riskDetails: RiskDetail[];
  onTryAnother: () => void;
}

const Result = (props: ResultProps) => {
  const {
    address = '',
    score = -1,
    riskDetails = []
  } = props;
  const stars = ratingStars(score)
  const level = ratingLevelByStars(stars)

  console.log('riskDetails', riskDetails)

  return (
    <div className={classnames(
      'text-center',
      props.className
    )}>
      <Typo.Title className={
        '!text-4xl'
      }>The Security Level is</Typo.Title>

      <Typo.Title className={classnames(
        '!text-4xl mt-2 ',
        {
          'text-red-500': level === RatingLevel.EXTREMELY_DANGEROUS,
          'text-red-700': level === RatingLevel.DANGEROUS,
          'text-orange-500': level === RatingLevel.INSECURE,
          'text-gray-500': level === RatingLevel.GENERALLY_GOOD,
          'text-blue-500': level === RatingLevel.FAIRLY_SAFE,
          'text-green-500': level === RatingLevel.SAFE,
        }
      )}>{level}</Typo.Title>

      <div className={'mt-4'}>
        <Typo.Normal>
          Contract address: {address}
        </Typo.Normal>
      </div>

      <div className={'mt-4'}>
        <Typo.Normal className={'!text-slate-700 mb-2'}>
          Security Rating: {score} / 100
        </Typo.Normal>
        <Rating
          name="read-only"
          readOnly
          value={stars}
          precision={0.5}
        />
      </div>

      <div className={'mt-4 flex justify-center items-center'}>
        <Button
          state={'primary'}
          className={'!w-[200px]'}
          onClick={() => {
            props.onTryAnother()
          }}
        >Try Another Address</Button>
      </div>

      {isNonEmptyArray(riskDetails) && (
        <div className={'text-left'}>
          <Typo.Title className={'!text-xl mb-2'}>Risk Details:</Typo.Title>
          {riskDetails.map((item, index) => (
            <Accordion key={item.name + index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id={item.name + index}
              >
                <GppMaybeIcon className={'text-red-700 mr-2'}/>
                <Typo.Normal className={'!text-slate-500'}>{item.name}</Typo.Normal>
              </AccordionSummary>
              <AccordionDetails>
                {typeof item.value === 'string' && (
                  <div>
                    <Typo.Small>
                      value: {item.value}
                    </Typo.Small>
                  </div>
                )}
                {isNonEmptyArray(item.labels) && (
                  <div>
                    <Typo.Small className={'mb-2'}>
                      Labels:
                    </Typo.Small>
                    <Stack direction="row" spacing={1}>
                      {item.labels.map(label => (
                        <Chip key={label} label={label}/>
                      ))}
                    </Stack>
                  </div>
                )}

                {isNonEmptyArray(item.sources) && (
                  <div className={'mt-4'}>
                    <Typo.Small className={'mb-2'}>
                      Sources:
                    </Typo.Small>
                    <Stack direction="row" spacing={1}>
                      {item.sources.map(item => (
                        <Chip key={item} label={item}/>
                      ))}
                    </Stack>
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;