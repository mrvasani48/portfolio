import { Tabs } from "@mantine/core";

const Clients = () => {
  return (
    <div>
      <div className="mt-16">
        <p className="text-md text-red-500  uppercase">POPULAR CLIENTS</p>
        <h2 className="text-gray-300 text-7xl pt-5 mb-7">Awesome Clients</h2>
      </div>
      <div>
        <Tabs defaultValue="gallery" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Clients;
