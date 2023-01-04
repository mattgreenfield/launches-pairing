export type Launch = {
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  launch_failure_details: {
    time: string;
    altitude: string;
    reason: string;
  };
  links: {
    mission_patch_small: string;
  };
  rocket: {
    first_stage?: {
      cores: { core_serial: string }[];
    };
    second_stage?: {
      payloads: { payload_id: string; payload_type: string }[];
    };
  };
};
