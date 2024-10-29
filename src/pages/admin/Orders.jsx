import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Form,
  Input,
  Button,
  Select,
  Table,
  Space,
  Popconfirm,
  Tag,
} from "antd";
import { getOrder, createOrder, updateOrder, deleteOrder } from "../../api/api";

import axios from "axios";

const { Option } = Select;

const orderOptions = ["Web Development", "Mobile Orders Development"];

const Orders = () => {
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: orders,
    isLoading: ordersLoading,
    isError: ordersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrder,
  });

  const {
    data: availableTechnologies,
    isLoading: technologiesLoading,
    isError: technologiesError,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: () =>
      axios.get("http://localhost:3002/technologies").then((res) => res.data),
  });

  const { mutate: createData } = useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries("orders"); // Use "orders" here
      form.resetFields();
    },
  });

  const { mutate: updateData } = useMutation({
    mutationFn: updateOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] }); // Use "orders" here
      setEditingRecord(null);
      form.resetFields();
    },
  });

  const { mutate: deleteData } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleCreate = (values) => {
    createData(values);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue({
      name: record.name,
      lastName: record.lastName,
      email: record.email,
      order: record.order,
      technologies: record.technologies,
    });
  };

  const handleUpdate = (values) => {
    updateData({ id: editingRecord.id, ...values });
  };

  const handleDelete = (id) => {
    deleteData(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Technologies",
      dataIndex: "technologies",
      key: "technologies",
      render: (technologies) => (
        <>
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => {
              handleDelete(record.id);
            }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (ordersLoading) {
    return <div>Loading orders...</div>;
  }

  if (ordersError) {
    return <div>Error loading orders: {ordersError.message}</div>;
  }

  if (technologiesLoading) {
    return <div>Loading technologies...</div>;
  }

  if (technologiesError) {
    return <div>Error loading technologies: {technologiesError.message}</div>;
  }

  return (
    <div className=" w-full h-full mx-auto   flex flex-col items-center justify-center">
      <div className=" w-full max-w-[500px] bg-slate-300 mt-[60px] p-6">
        <div className="mt-12 ">
          <h2 className="text-center">Work with Us</h2>
        </div>
        <Form
          className="w-[400px] pt-10 mt-5"
          form={form}
          onFinish={editingRecord ? handleUpdate : handleCreate}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="order"
            label="Order"
            rules={[{ required: true, message: "Please select an order!" }]}
          >
            <Select>
              {orderOptions.map((order) => (
                <Option key={order} value={order}>
                  {order}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="technologies"
            label="Technologies"
            rules={[{ required: true, message: "Please select technologies!" }]}
          >
            {availableTechnologies ? (
              <Select mode="multiple">
                {availableTechnologies.map((tech) => (
                  <Option key={tech} value={tech}>
                    {tech}
                  </Option>
                ))}
              </Select>
            ) : (
              <div>Loading technologies...</div>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        className="mt-8 w-auto "
        dataSource={orders}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
};

export default Orders;
