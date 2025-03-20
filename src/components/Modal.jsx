import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CloseIcon from "@mui/icons-material/Close";
import { reactBreakpoints } from "../styles/breakpoints";

const navModalStyle = {
  height: "calc(100% - 80px)",
  top: 80,
};

const navBackdropStyle = {
  height: "calc(100% - 80px)",
  top: 80,
};

const navBoxStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "#264061",
  overflow: "auto",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-track": {
    background: "#f0f1f3",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#d1d6db",
  },
};

const addProdModalStyle = {
  height: "calc(100vh - 81.6px)",
  top: 81.6,
};

const addProdBackdropStyle = {
  backgroundColor: "transparent",
};

const addProdBoxStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "transparent",
};

const dailyCalModalStyle = (mobileMax) => ({
  top: mobileMax ? 81.6 : 0,
});

const dailyCalBackdropStyle = (mobileMax) => ({
  backgroundColor: mobileMax ? "transparent" : "rgba(0, 0, 0, 0.5)",
});

const dailyCalBoxStyle = (mobileMax) => ({
  width: "100%",
  height: "100%",
  maxHeight: mobileMax ? "none" : 572,
  maxWidth: mobileMax ? "none" : 672,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  overflow: mobileMax ? "hidden" : "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scollbar-track": {
    background: "#f0f1f3",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#264061",
  },
});

const dailyCalReturnBtnStyle = (mobileContentMax) => ({
  width: "87.5%",
  minHeight: 40,
  borderRadius: 0,
  backgroundColor: "#EFF1F3",
  justifyContent: "start",
  padding: mobileContentMax ? "0 6.25%" : "0 calc((100% - 450px) / 2)",
  maxWidth: 450,
  boxSizing: "content-box",
  transition: "background 0.3s ease",

  "&:hover": {
    backgroundColor: "#dde0e3",
  },

  "&:active": {
    backgroundColor: "#c6cace",
  },
});

const returnBtnBoxStyle = {
  height: 40,
};

const addProdReturnBtnStyle = (mobileContentMax) => ({
  width: "40.62%",
  height: "inherit",
  borderRadius: 0,
  color: "black",
  justifyContent: "start",
  padding: mobileContentMax ? "0 0 0 6.25%" : "0 0 0 calc((100% - 450px) / 2)",
  transition: "background-color 0.3s ease",
  position: "fixed",

  "&:hover": {
    backgroundColor: "#dde0e3",
  },

  "&:active": {
    backgroundColor: "#c6cace",
  },
});

const returnIconStyle = {
  fontSize: 15,
  stroke: "black",
  strokeWidth: 1,
};

const closeBtnStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  padding: 0,
  minWidth: 0,
  borderRadius: 0,
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#f0f0f0",
  },

  "&:active": {
    backgroundColor: "#e0e0e0",
  },
};

const closeIconStyle = {
  color: "black",
  fontSize: 20,
};

export const ModalComp = ({ children, type, open, onClose }) => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });
  const mobileContentMax = useMediaQuery({
    maxWidth: reactBreakpoints.mobileContentMax,
  });

  return (
    <>
      {type === "navigation" && (
        <>
          <Modal
            open={open}
            onClose={onClose}
            slotProps={{
              backdrop: {
                sx: navBackdropStyle,
              },
            }}
            sx={navModalStyle}
          >
            <Box sx={navBoxStyle}>{children}</Box>
          </Modal>
        </>
      )}
      {type === "daily-calories" && (
        <>
          <Modal
            open={open}
            onClose={onClose}
            slotProps={{
              backdrop: {
                sx: dailyCalBackdropStyle(mobileMax),
              },
            }}
            sx={dailyCalModalStyle(mobileMax)}
          >
            <Box sx={dailyCalBoxStyle(mobileMax)}>
              {mobileMax ? (
                <>
                  <Button
                    onClick={onClose}
                    sx={dailyCalReturnBtnStyle(mobileContentMax)}
                    disableRipple
                  >
                    <KeyboardReturnIcon sx={returnIconStyle} />
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={onClose} sx={closeBtnStyle} disableRipple>
                    <CloseIcon sx={closeIconStyle} />
                  </Button>
                </>
              )}
              {children}
            </Box>
          </Modal>
        </>
      )}
      {type === "add-product" && (
        <>
          <Modal
            open={open}
            onClose={onClose}
            slotProps={{
              backdrop: {
                sx: addProdBackdropStyle,
              },
            }}
            sx={addProdModalStyle}
          >
            <Box sx={addProdBoxStyle}>
              <Box onClick={onClose} sx={returnBtnBoxStyle}>
                <Button
                  onClick={onClose}
                  sx={addProdReturnBtnStyle(mobileContentMax)}
                  disableRipple
                >
                  <KeyboardReturnIcon sx={returnIconStyle} />
                </Button>
              </Box>

              {children}
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

ModalComp.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
