import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Image, GridItem, Box } from "@chakra-ui/react";

import { addSelectedItems, setVisible } from "../../redux/gameSlice/gameSlice";

const notVisibleImg =
  "https://www.payneful.co.uk/projects/french-accent-translator/images/clouseau.png";

function Card({ item }) {
  const selectedItems = useSelector((state) => state.cardList.selectedItems);

  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    if (selectedItems.length < 2 && item.visible === false) {
      dispatch(setVisible(item.id));
      dispatch(addSelectedItems(item));
    }
  };

  return (
    <div>
      <GridItem>
        <Box
          borderWidth={item.visible ? "2px" : "1px"}
          borderRadius="xl"
          borderColor={item.visible ? "blue" : "red"}
          w="100px"
          h="157px"
        >
          <Image
            onClick={() => handleOnClick(item)}
            w="100px"
            h="120px"
            src={item.visible ? item.image : notVisibleImg}
            borderWidth="1px"
            borderRadius="lg"
            alignItems="center"
          />
          <p style={{ fontSize: "12px" }}>
            {item.visible ? item.name : "Inspector Clouseau"}
          </p>
        </Box>
      </GridItem>
    </div>
  );
}

export default Card;
