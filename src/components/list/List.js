import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./list.css";

import { Box, Center, Grid, Heading } from "@chakra-ui/react";

import {
  compare,
  setUnVisibleAllCard,
  shuffle,
} from "../../redux/gameSlice/gameSlice";
import Card from "../card/Card";

function List() {
  const items = useSelector((state) => state.cardList.items);
  const selectedItems = useSelector((state) => state.cardList.selectedItems);
  const score = useSelector((state) => state.cardList.score);

  const dispatch = useDispatch();

  function compareCard(arg) {
    dispatch(compare());
  }

  function closeCard(arg) {
    dispatch(setUnVisibleAllCard());
  }

  useEffect(() => {
    if (selectedItems.length === 2) {
      setTimeout(compareCard, 1000);
    }
  }, [selectedItems]);

  useEffect(() => {
    dispatch(shuffle());
    setTimeout(closeCard, 1500);
  }, []);

  return (
    <div>
      <Center>
        <Box w="1300px" mt="30px">
          <Heading
            size="xl"
            fontSize="30px"
            mb="10px"
            fontFamily={"Finger Paint"}
          >
            Inspector Clouseau Memory Game
            <p className="note">Mission: Historical Characters</p>
            <p className="note-2">
              Find same two historical character's photograph.
            </p>
          </Heading>

          <p className="score">
            Score{score > 0 || score < 0 ? "s" : ""}: {score}
          </p>
          <Box borderRadius="md" borderWidth="1px" p="5px" borderColor="black">
            <Grid templateColumns="repeat(12, 1fr)" gap={2}>
              {items.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default List;
