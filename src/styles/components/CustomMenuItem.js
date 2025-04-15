import { Delete, Edit } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import styled from "styled-components";

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    min-height: 0;
    padding: 6px 10px;
  }
`;

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const StyledEditIcon = styled(Edit)`
  &.MuiSvgIcon-root {
    fill: #212121;
    font-size: 17px;
  }
`;

export const StyledDeleteIcon = styled(Delete)`
  &.MuiSvgIcon-root {
    fill: #212121;
    font-size: 17px;
  }
`;
