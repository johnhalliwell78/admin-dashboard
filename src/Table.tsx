import { Add, ExpandLess, ExpandMore, FilterList } from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const products = [
  {
    id: 1,
    name: "Máy Lọc Nước Đầu Nguồn 3M AP904",
    brand: "3M",
    sku: "AP904",
    usage: 25,
    children: [
      {
        id: 11,
        name: "Lõi lọc 3M AP904 Sediment",
        brand: "3M",
        sku: "3M AP904 Sediment",
        cycle: "12 tháng",
        price: "400,000đ",
        extra: "Loại bỏ cặn lớn và tạp chất",
      },
      {
        id: 12,
        name: "Lõi lọc 3M AP904 Carbon Block",
        brand: "3M",
        sku: "3M AP904 Carbon",
        cycle: "18 tháng",
        price: "600,000đ",
        extra: "Loại bỏ clo, mùi hôi, tạp chất hữu cơ",
      },
    ],
  },
  {
    id: 2,
    name: "Máy Lọc Nước RYO Hyundai RP901",
    brand: "RYO Hyundai",
    sku: "RP901",
    usage: 110,
    children: [
      {
        id: 21,
        name: "Lõi lọc RYO Sediment Filter",
        brand: "RYO Hyundai",
        sku: "RYO Sediment",
        cycle: "6 tháng",
        price: "280,000đ",
        extra: "Bảo hành 1 năm",
      },
      {
        id: 22,
        name: "Lõi lọc RYO Pre-Carbon Filter",
        brand: "RYO Hyundai",
        sku: "RYO Pre-Carbon",
        cycle: "9 tháng",
        price: "300,000đ",
        extra: "Lọc cặn siêu nhỏ",
      },
    ],
  },
  {
    id: 3,
    name: "Máy Lọc Nước Kangaroo KG100HU+",
    brand: "Kangaroo",
    sku: "KG100HU",
    usage: 90,
    children: [
      {
        id: 31,
        name: "Lõi lọc Kangaroo PP 5 Micron",
        brand: "Kangaroo",
        sku: "KG PP5",
        cycle: "6 tháng",
        price: "250,000đ",
        extra: "Lọc cặn bẩn lớn",
      },
      {
        id: 32,
        name: "Lõi lọc Kangaroo CTO Carbon",
        brand: "Kangaroo",
        sku: "KG CTO",
        cycle: "12 tháng",
        price: "350,000đ",
        extra: "Loại bỏ chất hữu cơ, clo dư",
      },
      {
        id: 33,
        name: "Lõi lọc Kangaroo RO Membrane",
        brand: "Kangaroo",
        sku: "KG RO",
        cycle: "24 tháng",
        price: "850,000đ",
        extra: "Màng lọc RO công nghệ Mỹ",
      },
    ],
  },
  {
    id: 4,
    name: "Máy Lọc Nước Karofi Optimus i2",
    brand: "Karofi",
    sku: "Optimus i2",
    usage: 120,
    children: [
      {
        id: 41,
        name: "Lõi lọc Karofi Smax Duo 1",
        brand: "Karofi",
        sku: "Karofi Duo1",
        cycle: "6 tháng",
        price: "220,000đ",
        extra: "Lọc bùn đất, tạp chất lớn",
      },
      {
        id: 42,
        name: "Lõi lọc Karofi Smax Duo 2",
        brand: "Karofi",
        sku: "Karofi Duo2",
        cycle: "9 tháng",
        price: "300,000đ",
        extra: "Hấp thụ clo dư, khử mùi hôi",
      },
      {
        id: 43,
        name: "Lõi lọc Karofi T33-GAC",
        brand: "Karofi",
        sku: "Karofi T33",
        cycle: "12 tháng",
        price: "380,000đ",
        extra: "Tăng cường vị ngon của nước",
      },
    ],
  },
];

const ProductTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Sản phẩm</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ bgcolor: "#007bff", color: "white" }}
        >
          Tạo mới
        </Button>
      </Toolbar>
      <Paper sx={{ p: 2 }}>
        {/* Search & Filter Section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tất Cả" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <Toolbar>
          <TextField
            placeholder="Tìm theo tên sản phẩm, SKU"
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Select defaultValue="" displayEmpty size="small" sx={{ mr: 2 }}>
            <MenuItem value="">Thương hiệu</MenuItem>
            <MenuItem value="3M">3M</MenuItem>
            <MenuItem value="RYO Hyundai">RYO Hyundai</MenuItem>
          </Select>
          <IconButton>
            <FilterList />
          </IconButton>
        </Toolbar>

        {/* Table Section */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Ảnh</TableCell>
                <TableCell>Sản phẩm gốc</TableCell>
                <TableCell>Thương hiệu</TableCell>
                <TableCell>Mã SKU</TableCell>
                <TableCell>Tổng lượt sử dụng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <TableRow>
                    <TableCell>
                      {product.children.length > 0 && (
                        <IconButton onClick={() => toggleExpand(product.id)}>
                          {expandedRows.includes(product.id) ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <CardMedia
                        component="img"
                        height="40"
                        width="40"
                        sx={{ width: 40, height: 40, objectFit: "cover" }} // Ensures proper sizing
                        image={`https://picsum.photos/300/200?random=${Math.random()}`}
                        alt="Random"
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>{product.usage}</TableCell>
                  </TableRow>

                  {expandedRows.includes(product.id) && (
                    <TableRow>
                      <TableCell colSpan={12} sx={{ p: 0, bgcolor: "#f8f9fa" }}>
                        <Collapse
                          in={expandedRows.includes(product.id)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Table size="small">
                            <TableHead>
                              <TableRow sx={{ bgcolor: "#e9ecef" }}>
                                <TableCell>Ảnh</TableCell>
                                <TableCell>Sản phẩm</TableCell>
                                <TableCell>Thương hiệu</TableCell>
                                <TableCell>Mã SKU</TableCell>
                                <TableCell>Chu kỳ chăm sóc</TableCell>
                                <TableCell>Giá bán</TableCell>
                                <TableCell>Thông tin thêm</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {product.children.map((child) => (
                                <TableRow key={child.id}>
                                  <TableCell>
                                    <CardMedia
                                      component="img"
                                      height="40"
                                      width="40"
                                      sx={{
                                        width: 40,
                                        height: 40,
                                        objectFit: "cover",
                                      }} // Ensures proper sizing
                                      image={`https://picsum.photos/300/200?random=${Math.random()}`}
                                      alt="Random"
                                    />
                                  </TableCell>
                                  <TableCell>{child.name}</TableCell>
                                  <TableCell>{child.brand}</TableCell>
                                  <TableCell>{child.sku}</TableCell>
                                  <TableCell>{child.cycle}</TableCell>
                                  <TableCell>{child.price}</TableCell>
                                  <TableCell>{child.extra}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Wrapper>
  );
};

export default ProductTable;
