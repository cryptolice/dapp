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
import {Alert} from "@mui/material";

export enum ResultType {
  SUCCESS = 'SUCCESS',
  DUPLICATED = 'DUPLICATED',
  INVALID = 'INVALID'
}

export type ResultProps = Extendable & {
  resultType: ResultType;
  score: number;
  address: string;
  chainName: string;
  onTryAnother: () => void;
}

const Result = (props: ResultProps) => {
  const {
    score = -1,
    resultType = ResultType.SUCCESS,
    address = '0x9bd547446ea13c0c13df2c1885e1f5b019a77441',
  } = props;
  const stars = ratingStars(score)
  const level = ratingLevelByStars(stars)

  return (
    <div className={classnames(
      'text-center',
      props.className
    )}>

      <Typo.Title className={
        '!text-4xl'
      }>Thank you for the report ❤️</Typo.Title>

      <Typo.Title className={
        classnames('!text-2xl mt-4', {
          'text-green-500': resultType === ResultType.SUCCESS,
        })
      }>Your submission has been accepted 🎉️</Typo.Title>

      <Typo.Normal className={'mt-2'}>
        Thank you for contributing to creating a safer environment in web3
      </Typo.Normal>

      <Alert
        severity="success"
        className={'mt-4'}
      >🎁 A reward NFT has sent to your address, go check it 🥳</Alert>

      <Typo.Title className={
        '!text-2xl mt-4'
      }>The Contract's security level is</Typo.Title>

      <Typo.Title className={classnames(
        '!text-2xl mt-2 ',
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
          Current Chain: {props.chainName}
        </Typo.Normal>
        <Typo.Normal className={'mt-2'}>
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
    </div>
  );
};

export default Result;