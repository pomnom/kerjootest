import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

function TestSelect() {
  const [dataprovinsi, setdataprovinsi] = useState([]);
  const [kabupatenkota, setkabupatenkota] = useState([]);
  const [kecamatan, setkecamatan] = useState([]);
  const [desa, setdesa] = useState([]);
  useEffect(() => {
    fetch("https://api.kerjoo.com/api/v1/reference/provinces")
      .then((res) => res.json())
      .then(
        (result) => {
          setdataprovinsi(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  const getDataKabupatenkota = (provinsi_id) => {
    fetch("https://api.kerjoo.com/api/v1/reference/regencies_of/" + provinsi_id)
      .then((res) => res.json())
      .then(
        (result) => {
          setkabupatenkota(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const getDataKecamatan = (kota_id) => {
    fetch("https://api.kerjoo.com/api/v1/reference/districts_of/" + kota_id)
      .then((res) => res.json())
      .then(
        (result) => {
          setkecamatan(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const getDataDesa = (kecamatan_id) => {
    fetch("https://api.kerjoo.com/api/v1/reference/villages_of/" + kecamatan_id)
      .then((res) => res.json())
      .then(
        (result) => {
          setdesa(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <Container>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Pilih Provinsi</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => {
            getDataKabupatenkota(e.target.value);
            getDataKecamatan(e.target.value);
            getDataDesa(e.target.value);
          }}
        >
          <option>-PILIH PROVINSI-</option>
          {dataprovinsi.map((provinsi) => (
            <option key={provinsi.id} value={provinsi.id}>
              {provinsi.name}
            </option>
          ))}
        </Form.Control>
        <Form.Label>Pilih Kota</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => {
            getDataKecamatan(e.target.value);
          }}
        >
          <option>-PILIH KOTA-</option>
          {kabupatenkota.map((kota) => (
            <option key={kota.id} value={kota.id}>
              {kota.name}
            </option>
          ))}
        </Form.Control>
        <Form.Label>Pilih Kecamatan</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => {
            getDataDesa(e.target.value);
          }}
        >
          <option>-PILIH KECAMATAN-</option>
          {kecamatan.map((kecamatan) => (
            <option key={kecamatan.id} value={kecamatan.id}>
              {kecamatan.name}
            </option>
          ))}
        </Form.Control>
        <Form.Label>Pilih Desa</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => {
            // getDataKecamatan(e.target.value);
          }}
        >
          <option>-PILIH DESA-</option>
          {desa.map((desa) => (
            <option key={desa.id} value={desa.id}>
              {desa.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Container>
  );
}

export default TestSelect;
