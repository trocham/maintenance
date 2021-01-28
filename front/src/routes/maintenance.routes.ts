import { Router } from "express";
const router= Router();

import * as maintenanceCtlr from "./maintenance.controller";


router.get ('/maintenanceCars', maintenanceCtlr.getMaintenanceCars );

router.get ('/maintenanceCar/:id', maintenanceCtlr.getMaintenanceCar );

router.post ('/maintenanceCar', maintenanceCtlr.createMaintenanceCar);

router.put ('/maintenanceCar/:id', maintenanceCtlr.updateMaintenanceCar )

router.delete ('/maintenanceCar/:id', maintenanceCtlr.deleteMaintenanceCar );

export default router;

