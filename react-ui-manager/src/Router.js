import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

// Thông tin vật tư may
import Material from "./pages/material/materialList/Material";
import MaterialEdit from "./pages/material/materialEdit/MaterialEdit";
import MaterialInfo from "./pages/material/materialInfo/MaterialInfo";
import MaterialNew from "./pages/material/materialNew/MaterialNew";

// Thông tin phân xưởng
import Factory from "./pages/factory/factoryList/Factory";
import FactoryEdit from "./pages/factory/factoryEdit/FactoryEdit";
import FactoryInfo from "./pages/factory/factoryInfo/FactoryInfo";
import FactoryNew from "./pages/factory/factoryNew/FactoryNew";

// Thông tin kho
import Warehouse from "./pages/warehouse/warehouseList/Warehouse";
import WarehouseEdit from "./pages/warehouse/warehouseEdit/WarehouseEdit";
import WarehouseInfo from "./pages/warehouse/warehouseInfo/WarehouseInfo";
import WarehouseNew from "./pages/warehouse/warehouseNew/WarehouseNew";

// Thông tin nhà cung cấp
import Supplier from "./pages/supplier/supplierList/Supplier";
import SupplierEdit from "./pages/supplier/supplierEdit/SupplierEdit";
import SupplierInfo from "./pages/supplier/supplierInfo/SupplierInfo";
import SupplierNew from "./pages/supplier/supplierNew/SupplierNew";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Home />} />
          {/* Vật liệu may */}
          <Route path="material">
            <Route index element={<Material />} />
            <Route path=":materialId" element={<MaterialInfo />} />
            <Route path="new" element={<MaterialNew title="Thêm vật liệu" />} />
            <Route
              path="edit"
              element={<MaterialEdit title="Chỉnh sửa thông tin vật liệu" />}
            />
          </Route>
        </Route>
        {/* Phân xưởng */}
        <Route path="factory">
          <Route index element={<Factory />} />
          <Route path=":factoryId" element={<FactoryInfo />} />
          <Route path="new" element={<FactoryNew title="Thêm phân xưởng" />} />
          <Route
            path="edit"
            element={<FactoryEdit title="Chỉnh sửa thông tin phân xưởng" />}
          />
        </Route>
        {/* Warehouse */}
        <Route path="warehouse">
          <Route index element={<Warehouse />} />
          <Route path=":warehouseId" element={<WarehouseInfo />} />
          <Route path="new" element={<WarehouseNew title="Thêm kho" />} />
          <Route
            path="edit"
            element={<WarehouseEdit title="Chỉnh sửa thông tin kho" />}
          />
        </Route>
        <Route path="supplier">
          <Route index element={<Supplier />} />
          <Route path=":supplierId" element={<SupplierInfo />} />
          <Route
            path="new"
            element={<SupplierNew title="Thêm nhà cung cấp" />}
          />
          <Route
            path="edit"
            element={<SupplierEdit title="Chỉnh sửa thông tin nhà cung cấp" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
