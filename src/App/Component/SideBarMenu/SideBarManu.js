// import React, { Component } from "react";
// import styled from "styled-components";

// const UL = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;
// const LI = styled.li``;
// const Item = styled.div`
//   display: flex;
//   padding: 12px 18px;
//   padding-left: ${(props) => `${props.dept * 18}px`};
//   align-items: center;
// `;
// const Label = styled.span`
//   width: 100%;
//   display: block;
//   cursor: pointer;
// `;
// const Arrow = styled.span`
//   display: flex;
//   height: 25px;
//   width: 35px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   &::after {
//     content: "";
//     width: 0;
//     height: 0;
//     border-left: 4px solid transparent;
//     border-right: 4px solid transparent;

//     border-top: 4px solid #000;

//     transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
//   }
// `;
// export default class SideBarManu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeMenus: [],
//     };
//   }
//   handleMenuClick(data) {
//     console.log("mobile view data",data);
//   }

//   handleArrowClick(menuName) {
//     let newActiveMenus = [...this.state.activeMenus];

//     if (newActiveMenus.includes(menuName)) {
//       var index = newActiveMenus.indexOf(menuName);
//       if (index > -1) {
//         newActiveMenus.splice(index, 1);
//       }
//     } else {
//       newActiveMenus.push(menuName);
//     }

//     this.setState({ activeMenus: newActiveMenus });
//     // setActiveMenus(newActiveMenus);

//   }

//   render() {
//     const { menus, } = this.props;
//     console.log("->>", menus);
//     return (
//       <UL>
//         {menus.map((menu, index) => {
//           const dept = 1;
//           const menuName = `sidebar-menu-${dept}-${index}`;

//           return (
//             <ListMenu
//               dept={dept}
//               data={menu}
//               hasSubMenu={menu.submenu}
//               menuName={menuName}
//               key={menuName}
//               activeMenus={this.props.activeMenus}
//               menuIndex={index}
//             />
//           );
//         })}
//       </UL>
//     );
//   }
// }

// export class ListMenu extends Component {
//   render() {
//     const { dept, data, hasSubMenu, toggle, menuName, menuIndex } = this.props;
//     console.log(data);

//     if (!toggle) {
//       return null;
//     }
//     return (
//       <LI>
//         <Item dept={dept}>
//           <Label onClick={() => this.handleMenuClick(data)}>
//             {data.label}{" "}
//           </Label>
//           {hasSubMenu && (
//             <Arrow
//               onClick={() => this.handleArrowClick(menuName)}
//               toggle={this.state.activeMenus.includes(menuName)}
//             />
//           )}
//         </Item>
//         {hasSubMenu && (
//           <SubMenu
//             dept={dept}
//             data={data.submenu}
//             toggle={this.state.activeMenus.includes(menuName)}
//             menuIndex={menuIndex}
//           />
//         )}
//       </LI>
//     );
//   }
// }

// export class SubMenu extends Component {
//   render() {
//     const { dept, data, toggle, menuIndex  } = this.props;
//     if (!toggle) {
//       return null;
//     }
//     dept = dept + 1;
//     return (
//       <UL>
//         {data.map((menu, index) => {
//           const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
//           console.log(menuName);

//           return (
//             <ListMenu
//               dept={dept}
//               data={menu}
//               hasSubMenu={menu.submenu}
//               menuName={menuName}
//               key={menuName}
//               menuIndex={index}
//             />
//           );
//         })}
//       </UL>
//     );
//   }
// }

import React, { useState } from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li``;
const Item = styled.div`
  display: flex;
  padding: 12px 18px;
  padding-left: ${(props) => `${props.dept * 18}px`};
  align-items: center;
`;
const Label = styled.span.attrs({
  className: "menu-name"
})`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span.attrs({
  className: "icon-pluse"
})`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &::after {
    content:"+";
  }
`;

const SideBarManu = ({ menus, productMenuData }) => {
  const [activeMenus, setActiveMenus] = useState([]);

  const handleMenuClick = (data) => {
    console.log(data);
  };


  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];
    console.log("activeMenus ", menuName);

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI>
      <Item dept={dept}>
        <Label onClick={() => handleArrowClick(menuName)}>{data.name} </Label>
       {console.log("hasSubMenu",hasSubMenu)}
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.children}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );
  

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }
    dept = dept +1;  
    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.children}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}

        
      </UL>
    );
  };

  {
    console.log("productmenu", productMenuData);
  }
  return (
    <UL>
      
      {productMenuData.menuProducts ? (
        <>
          {productMenuData.menuProducts.categoryList &&
          productMenuData.menuProducts.categoryList.length > 0 ? (
            <>
              <ul className="MenuList mobile">
                {productMenuData.menuProducts.categoryList[0].children
                  .sort((a, b) => a.position - b.position)
                  .map((menu, index) => {
                    const dept = 1;
                    const menuName = `sidebar-menu-${dept}-${index}`;
                    return (
                      <>
                        <ListMenu
                          dept={dept}
                          data={menu}
                          hasSubMenu={menu.children}
                          menuName={menuName}
                          key={menuName}
                          menuIndex={index}
                        />
                      </>
                    );
                  })}
              </ul>
            </>
          ) : (
            <> loading...</>
          )}
        </>
      ) : (
        <> No Data</>
      )}
    </UL>
  );
};

export default SideBarManu;
