import React, { Component } from "react";
import styled from "styled-components";
import { List, ListItem } from "react-native-elements";
import { Switch } from "react-native";

const Wrapper = styled.ScrollView`
  flex: 1;
`;

class SideMenu extends Component {
  state = {
    expert: false
  };

  list = [
    {
      title: "Gespeichert",
      icon: "storage",
      onPress: () => console.log("menu item 1")
    }
  ];
  render() {
    return (
      <Wrapper>
        <List>
          {this.list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={item.onPress}
              rightIcon={item.rightIcon}
            />
          ))}
          <ListItem
            title="Experte"
            rightIcon={
              <Switch
                value={this.state.expert}
                onValueChange={expert => this.setState({ expert })}
              />
            }
          />
        </List>
      </Wrapper>
    );
  }
}

export default SideMenu;
