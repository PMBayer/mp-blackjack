import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Divider, IconButton, Stack, Tooltip } from "@mui/material";

interface ControlBarProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onHint: () => void;
  isRunning: boolean;
  hintText: string;
}

export default function ControlBar({
  onStart,
  onStop,
  onReset,
  onHint,
  isRunning,
  hintText,
}: ControlBarProps) {
  const iconColor = "rgba(0, 0, 0, 0.54)";

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        borderRadius: "24px",
        px: 3,
        py: 1,
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {!isRunning ? (
          <Tooltip title="Start Game" arrow>
            <IconButton
              onClick={onStart}
              sx={{
                color: iconColor,
                borderRadius: "50%",
                width: 48,
                height: 48,
              }}
              aria-label="Start"
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Stop Game" arrow>
            <IconButton
              onClick={onStop}
              sx={{
                color: iconColor,
                borderRadius: "50%",
                width: 48,
                height: 48,
              }}
              aria-label="Stop"
            >
              <StopIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
        <IconButton
          onClick={onReset}
          sx={{ color: iconColor, borderRadius: "50%", width: 48, height: 48 }}
          aria-label="Reset"
        >
          <ReplayIcon fontSize="large" />
        </IconButton>
        <Tooltip title={hintText} arrow>
          <IconButton
            onClick={onHint}
            sx={{
              color: iconColor,
              borderRadius: "50%",
              width: 48,
              height: 48,
            }}
            aria-label="Hint"
          >
            ?
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
