import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsShare, BsEye } from "react-icons/bs";
import { CgMore } from "react-icons/cg";
import { AiFillLike } from "react-icons/ai";
import {
  List,
  ListInlineItem,
  CardLink,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  CloseButton,
  Button,
} from "reactstrap";
import styles from "./styles.module.css";
import SocialIcons from "../SocialIcons";

interface IIconsData {
  handleClick?: () => void;
  onClickShareIcon?: () => void;
  totalLikes?: string;
  totalViews?: string;
  totalComments?: string;
}

const Icons: React.FC<IIconsData> = ({
  totalLikes,
  totalViews,
  totalComments,
}) => {
  const [likes, setLikes] = useState<any>(totalLikes);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const onClickShareIcon = () => {
    setIsTrue(!isTrue);
  };
  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <List type="inline" className="my-3">
        <ListInlineItem>
          <UncontrolledDropdown className="me-2" direction="end">
            <DropdownToggle
              color="primary"
              onClick={onClickShareIcon}
              className={styles.share_btn}
            >
              {isTrue ? (
                <CloseButton className="border-0" />
              ) : (
                <BsShare size={18} />
              )}
            </DropdownToggle>
            {isTrue ? (
              <DropdownMenu>
                <SocialIcons />
              </DropdownMenu>
            ) : null}
          </UncontrolledDropdown>
        </ListInlineItem>
        <ListInlineItem>
          <CardLink className={`text-secondary mx-2 mt-4 ${styles.icons}`}>
            {totalViews} <BsEye size={18} />
          </CardLink>
        </ListInlineItem>

        <ListInlineItem className={`my-2 ${styles.vr_line}`}>
          <Button
            className={` ${isClicked && "liked"} ${styles.like_btn}`}                     
            onClick={handleClick}
          >
            {likes} <AiFillLike size={18} 
            className={`${isClicked  ? styles.active : styles.inactive}`}  />
          </Button>
        </ListInlineItem>
        <ListInlineItem className={styles.vr_line}>
          <Button className={styles.like_btn}>
            <CardLink className={`text-secondary mx-2 ${styles.icons}`}>
              {totalComments} <BiMessageDetail size={18} />
            </CardLink>
          </Button>
        </ListInlineItem>
        <ListInlineItem>
          <CardLink className={`text-secondary mx-1 ${styles.icons}`}>
            <CgMore size={22} />
          </CardLink>
        </ListInlineItem>
      </List>
    </>
  );
};

export default Icons;
